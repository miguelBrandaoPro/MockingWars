export default class MessageManager {
    
  constructor(element) {
    this.element = element;
  }
    
  cleanMessage(){
    this.element.textContent = '';
  }
    
  add(message){
    let p = document.createElement("p");
    p.textContent = message; 
    this.element.append(message);
  }
    
  replace(message){
    this.cleanMessage();
    this.add(message);   
  }
    
}