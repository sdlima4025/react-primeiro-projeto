import { Item } from "@/types/Item";
import { type } from "os";

type addAction = {
    type: 'add';
    payload: {
        text: string;
    }
}
type EditTextAction = {
    type: string;
    payload: {
        id: number;
        newText:string;
    }
}
type ToggleDoneAction = {
    type: 'toggleDone';
    payload: {
        id:number; 
    } 
}
type RemoveAction = {
    type: 'remove';
    payload: {
        id:number;  
    } 
}
type ListActions = addAction | EditTextAction | ToggleDoneAction | RemoveAction;
export const listReducer = (list: Item[], action: ListActions) => {



    return list;
}