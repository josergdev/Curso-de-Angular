import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message, MessageId } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messageCollection: AngularFirestoreCollection<Message>;
  private messages: Observable<MessageId[]>;
  private user: User;

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) {
    this.messageCollection = afs.collection<Message>('messages', ref => ref.orderBy('date').limit(20));
    this.messages = this.messageCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Message;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  newMessage(texto: string) {
    const msg: Message = {
      name: '',
      message: texto,
      date: new Date(),
      uid: ''
    };
    return new Promise<DocumentReference>(resolve => {
      this.afAuth.user.subscribe(user => {
        msg.name = user.displayName;
        msg.uid = user.uid;
        resolve(this.messageCollection.add(msg));
      });
    });
  }

  getMessages(): Observable<MessageId[]> {
    return this.messages;
  }

  login(proveedor: string) {
    if (proveedor === 'Google') {
      console.log(proveedor);
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } else if (proveedor === 'Twitter') {
      console.log(proveedor);
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  getUser() {
    return this.afAuth.user;
  }

}
