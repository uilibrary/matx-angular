import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ChatDB } from './chat-db';
import { InvoiceDB } from './invoices';
import { Todo, TodoTag } from './todo';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { 
      'contacts': ChatDB.contacts,
      'chat-collections': ChatDB.chatCollection,
      'chat-user': ChatDB.user,
      'invoices': InvoiceDB.invoices,
      'todoList': Todo.todoList,
      'todoTag': TodoTag.tag
    }
  }
}