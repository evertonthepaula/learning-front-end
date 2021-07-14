import componentsBuilder from "../core/bootstrap.js";

import BigTicketClassModule from "./bigTicket/bigTicket.js";
import NewTicketClassModule from './newTicket/newTicket.js';
import CallTicketClassModule from './callTicket/callTicket.js';

export default (() => {
  const components = [
    {
      name:"big-ticket", 
      componentClass: BigTicketClassModule,
    },
    {
      name:"new-ticket", 
      componentClass: NewTicketClassModule,
    },
    {
      name:"call-ticket", 
      componentClass: CallTicketClassModule,
    }
  ]

  return componentsBuilder.build(components);
})();
