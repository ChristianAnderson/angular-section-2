import { BehaviorSubject } from 'rxjs';

export class SharedService{
    private value = new BehaviorSubject(new String);
    currentValue = this.value.asObservable();
    
    private secondValue = new BehaviorSubject(new String);
    secondCurrentValue = this.secondValue.asObservable();

    changeValue(newValue : String){
        this.value.next(newValue);
    }

    changeSecondValue(newValue : String){
        this.secondValue.next(newValue);
    }
}

