import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  val1 = "";
  val2 = "";
  Operator = ""
  text=""

  ClickBtn(value: string)
  {
    if(this.Operator=="")
    {
      this.val1 += value;
      this.text=this.val1;
      console.log('val1 ' + this.val1);
    }
    else{
      this.val2 = value;
      this.text=this.val2;
      console.log('val2 ' + this.val2);
    }
      
  }

  Divide()
  {
    this.Operator='/';
  }

  Multiply(){
    this.Operator='*';
  }

  Summ(){
    this.Operator='+';
  }

  Subtraction(){
    this.Operator='-';
  }

  Result(){
    console.log('val1 ' + this.val1);
    console.log('val1 ' + this.val2);
    switch (this.Operator) {
      case '+':
          let rez:number = 0;
          rez = parseInt(this.val1);
          rez+=parseInt(this.val2);
          this.val1 = rez.toString();
        break;

        case '-':
          (this.val1 as unknown as number) -= (this.val2 as unknown as number) 
        break;

        case '/':
          (this.val1 as unknown as number) /= (this.val2 as unknown as number) 
        break;

        case '*':
          (this.val1 as unknown as number) *= (this.val2 as unknown as number) 
        break;
    
      default:
        break;
    }
    this.text = this.val1;
    this.Operator='';
    this.val1='';
    this.val2='';
  }

}
