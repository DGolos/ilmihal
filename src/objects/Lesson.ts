export class LessonSection{
    type:string="";
    paragraphs:string[]=[];
}

export class Lesson{
    id:string="";
    bookId:string="";
    title:string="";
    color:string="";
    audio:string="";
    quoteText:string="";
    quoteReference:string="";
    sections:LessonSection[]=[];
}