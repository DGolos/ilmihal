export class ParagraphGroup{
    paragraphs:string[]=[];
}
export class LessonSection{
    type:number=-1;
    paragraphGroups:ParagraphGroup[]=[];
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