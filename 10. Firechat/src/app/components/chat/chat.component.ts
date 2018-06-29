import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';
import { Message, MessageId } from '../../interfaces/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje = '';
  usuario: any = {
    name: 'Juan Carlos'
  };

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  getMessages(): Observable<MessageId[]> {
    return this.chatService.getMessages();
  }

  enviar() {
    if (this.mensaje.length <= 0) {
      return;
    }
    this.chatService.newMessage(this.mensaje)
      .then(() => console.log('mensaje enviado'))
      .catch(error => console.error('error', error));
    this.mensaje = '';
    }

  login(proveedor: string) {
    this.chatService.login(proveedor);
  }

  logout() {
    this.chatService.logout();
  }

  getUser() {
    return this.chatService.getUser();
  }

}
