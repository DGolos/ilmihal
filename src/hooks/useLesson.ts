import { useEffect, useState } from 'react';
import { Lesson, lessons } from '../data/Lessons';

function useLesson(bookId:string,lessonId:string):Lesson|undefined{
    const [lesson,setLesson]=useState<Lesson>();

    useEffect(()=>{
        setLesson(lessons.find(lesson=>lesson.bookId===bookId && lesson.id===lessonId));
    },[bookId,lessonId])

    return lesson;
}

export default useLesson;