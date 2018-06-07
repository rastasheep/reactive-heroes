import { Action, State, StateContext } from '@ngxs/store';

export class AddMessage {
  static readonly type = '[Messages] AddMessage';
  constructor(public message: string) {}
}

export class ClearMessages {
  static readonly type = '[Messages] ClearMessages';
}

@State<string[]>({
  name: 'messages',
  defaults: []
})
export class MessagesState {
  @Action(AddMessage)
  addMessage({ getState, setState }: StateContext<string[]>, { message }: AddMessage) {
    setState([...getState(), message]);
  }

  @Action(ClearMessages)
  clearMessages({ setState }: StateContext<string[]>) {
    setState([]);
  }
}
