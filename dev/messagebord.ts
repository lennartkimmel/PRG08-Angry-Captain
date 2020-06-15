/// <reference path="main.ts">

class Messagebord {
    
    private static instance : Messagebord
    // private messagebord:Messagebord

    public static getInstance(): Messagebord {
        if(!Messagebord.instance) Messagebord.instance = new Messagebord()
        return Messagebord.instance
    }

    private constructor(){
        // this.messagebord.push(new Messagebord)
    }
}

window.addEventListener("load", () => Messagebord.getInstance())s