export interface LessonSection{
    type:string;
    paragraphs:string[];
    header?:string;
}

export interface Lesson{
    id:string;
    bookId:string;
    title:string;
    color:string;
    audio:string;
    quoteText:string;
    quoteReference:string;
    sections:LessonSection[];
}

export const lessons:Lesson[]=[
    {
      id: "1",
      bookId: "1",
      title: "label-book1-lesson1-title",
      color: "purple",
      audio: "EuzaBismilla",
      quoteText: "label-book1-lesson1-quote",
      quoteReference: "label-hadeeth-reference",
      sections: [
        {
          type:"0",
          paragraphs: ["label-book1-lesson1_section1-paragraph1"]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson1_section2-paragraph1",
            "label-book1-lesson1_section2-paragraph2"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson1_section3-paragraph1",
            "label-book1-lesson1_section3-paragraph2"
          ]
        }
      ]
    },
    {
      id: "2",
      bookId: "1",
      title: "label-book1-lesson2-title",
      color: "burgundy",
      audio: "Sehadet",
      quoteText: "label-book1-lesson2-quote",
      quoteReference: "label-book1-lesson2-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: ["label-book1-lesson2_section1-paragraph1"]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson2_section2-paragraph1",
            "label-book1-lesson2_section2-paragraph2"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson2_section2-paragraph3",
            "label-book1-lesson2_section2-paragraph4"
          ]
        }
      ]
    },
    {
      id: "3",
      bookId: "1",
      title: "label-book1-lesson3-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book1-lesson3-quote",
      quoteReference: "label-book1-lesson3-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
            "label-book1-lesson3_section1-paragraph1",
            "label-book1-lesson3_section1-paragraph2",
            "label-book1-lesson3_section1-paragraph3"
          ]
        }
      ]
    },
    {
      id: "4",
      bookId: "1",
      title: "label-book1-lesson4-title",
      color: "purple",
      audio: "RabbiJessir",
      quoteText: "label-book1-lesson4-quote",
      quoteReference: "label-hadeeth-reference",
      sections: [
        {
          type:"0",
          paragraphs: ["label-book1-lesson4_section1-paragraph1"]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson4_section2-paragraph1",
            "label-book1-lesson4_section2-paragraph2",
            "label-amin"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson4_section2-paragraph3",
            "label-book1-lesson4_section2-paragraph4",
            "label-amin"
          ]
        }
      ]
    },
    {
      id: "5",
      bookId: "1",
      title: "label-book1-lesson5-title",
      color: "purple",
      audio: "Subhaneke",
      quoteText: "label-book1-lesson5-quote",
      quoteReference: "label-hadeeth-reference",
      sections: [
        {
          type:"0",
          paragraphs: ["label-book1-lesson5_section1-paragraph1"]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson5_section2-paragraph1",
            "label-book1-lesson5_section2-paragraph2",
            "label-book1-lesson5_section2-paragraph3",
            "label-book1-lesson5_section2-paragraph4",
            "label-book1-lesson5_section2-paragraph5"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson5_section2-paragraph6",
            "label-book1-lesson5_section2-paragraph7",
            "label-book1-lesson5_section2-paragraph8",
            "label-book1-lesson5_section2-paragraph9",
            "label-book1-lesson5_section2-paragraph10"
          ]
        }
      ]
    },
    {
      id: "6",
      bookId: "1",
      title: "label-book1-lesson6-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book1-lesson6-quote",
      quoteReference: "label-book1-lesson6-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
            "label-book1-lesson6_section1-paragraph1",
            "label-book1-lesson6_section1-paragraph2",
            "label-book1-lesson6_section1-paragraph3"
          ]
        }
      ]
    },
    {
      id: "7",
      bookId: "1",
      title: "label-book1-lesson7-title",
      color: "razimic",
      audio: "Fatiha",
      quoteText: "label-book1-lesson7-quote",
      quoteReference: "label-hadeeth-reference",
      sections: [
        {
          type:"0",
          paragraphs: ["label-book1-lesson7_section1-paragraph1"]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson7_section2-paragraph1",
            "label-book1-lesson7_section2-paragraph2",
            "label-book1-lesson7_section2-paragraph3",
            "label-book1-lesson7_section2-paragraph4",
            "label-book1-lesson7_section2-paragraph5",
            "label-book1-lesson7_section2-paragraph6",
            "label-amin"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson7_section3-paragraph1",
            "label-book1-lesson7_section3-paragraph2",
            "label-book1-lesson7_section3-paragraph3",
            "label-book1-lesson7_section3-paragraph4",
            "label-book1-lesson7_section3-paragraph5",
            "label-book1-lesson7_section3-paragraph6",
            "label-amin"
          ]
        }
      ]
    },
    {
      id: "8",
      bookId: "1",
      title: "label-book1-lesson8-title",
      color: "razimic",
      audio: "Nas",
      quoteText: "label-book1-lesson8-quote",
      quoteReference: "label-hadeeth-reference",
      sections: [
        {
          type:"0",
          paragraphs: ["label-book1-lesson8_section1-paragraph1"]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson8_section2-paragraph1",
            "label-book1-lesson8_section2-paragraph2",
            "label-book1-lesson8_section2-paragraph3",
            "label-book1-lesson8_section2-paragraph4",
            "label-book1-lesson8_section2-paragraph5",
            "label-book1-lesson8_section2-paragraph6"
            
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson8_section3-paragraph1",
            "label-book1-lesson8_section3-paragraph2",
            "label-book1-lesson8_section3-paragraph3",
            "label-book1-lesson8_section3-paragraph4",
            "label-book1-lesson8_section3-paragraph5",
            "label-book1-lesson8_section3-paragraph6"
          ]
        }
      ]
    },
    {
      id: "9",
      bookId: "1",
      title: "label-book1-lesson9-title",
      color: "razimic",
      audio: "Felek",
      quoteText: "label-book1-lesson9-quote",
      quoteReference: "label-hadeeth-reference",
      sections: [
        {
          type:"0",
          paragraphs: ["label-book1-lesson9_section1-paragraph1"]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson9_section2-paragraph1",
            "label-book1-lesson9_section2-paragraph2",
            "label-book1-lesson9_section2-paragraph3",
            "label-book1-lesson9_section2-paragraph4",
            "label-book1-lesson9_section2-paragraph5"
            
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson9_section3-paragraph1",
            "label-book1-lesson9_section3-paragraph2",
            "label-book1-lesson9_section3-paragraph3",
            "label-book1-lesson9_section3-paragraph4",
            "label-book1-lesson9_section3-paragraph5"
          ]
        }
      ]
    },
    {
      id: "10",
      bookId: "1",
      title: "label-book1-lesson10-title",
      color: "razimic",
      audio: "Ihlas",
      quoteText: "label-book1-lesson10-quote",
      quoteReference: "label-hadeeth-reference",
      sections: [
        {
          type:"0",
          paragraphs: ["label-book1-lesson10_section1-paragraph1"]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson10_section2-paragraph1",
            "label-book1-lesson10_section2-paragraph2",
            "label-book1-lesson10_section2-paragraph3",
            "label-book1-lesson10_section2-paragraph4"
            
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson10_section3-paragraph1",
            "label-book1-lesson10_section3-paragraph2",
            "label-book1-lesson10_section3-paragraph3",
            "label-book1-lesson10_section3-paragraph4"
          ]
        }
      ]
    },
    {
      id: "14",
      bookId: "1",
      title: "label-book1-lesson14-title",
      color: "burgundy",
      audio: "Ezan",
      quoteText: "label-book1-lesson14-quote",
      quoteReference: "label-hadeeth-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson14_section1-paragraph1",
              "label-book1-lesson14_section1-paragraph2",
              "label-book1-lesson14_section1-paragraph3",
              "label-book1-lesson14_section1-paragraph4"
          ]
        },
        
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson14_section2-paragraph1",
            "label-book1-lesson14_section2-paragraph1",
            "label-book1-lesson14_section2-paragraph2",
            "label-book1-lesson14_section2-paragraph2",
            "label-book1-lesson14_section2-paragraph3",
            "label-book1-lesson14_section2-paragraph3",
            "label-book1-lesson14_section2-paragraph4",
            "label-book1-lesson14_section2-paragraph5",
            "label-book1-lesson14_section2-paragraph1",
            "label-book1-lesson14_section2-paragraph6"
            
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson14_section2-paragraph7",
            "label-book1-lesson14_section2-paragraph7",
            "label-book1-lesson14_section2-paragraph8",
            "label-book1-lesson14_section2-paragraph8",
            "label-book1-lesson14_section2-paragraph9",
            "label-book1-lesson14_section2-paragraph9",
            "label-book1-lesson14_section2-paragraph10",
            "label-book1-lesson14_section2-paragraph11",
            "label-book1-lesson14_section2-paragraph7",
            "label-book1-lesson14_section2-paragraph13"
          ]
        }
      ]
    },
    {
      id: "15",
      bookId: "1",
      title: "label-book1-lesson15-title",
      color: "burgundy",
      audio: "Ikamet",
      quoteText: "label-book1-lesson15-quote",
      quoteReference: "label-book1-lesson15-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson15_section1-paragraph1",
              "label-book1-lesson15_section1-paragraph2"
          ]
        },
        
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson14_section2-paragraph1",
            "label-book1-lesson14_section2-paragraph1",
            "label-book1-lesson14_section2-paragraph2",
            "label-book1-lesson14_section2-paragraph2",
            "label-book1-lesson14_section2-paragraph3",
            "label-book1-lesson14_section2-paragraph3",
            "label-book1-lesson14_section2-paragraph4",
            "label-book1-lesson14_section2-paragraph5",
            "label-book1-lesson15_section2-paragraph1",
            "label-book1-lesson14_section2-paragraph1",
            "label-book1-lesson14_section2-paragraph6"
            
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson14_section2-paragraph7",
            "label-book1-lesson14_section2-paragraph7",
            "label-book1-lesson14_section2-paragraph8",
            "label-book1-lesson14_section2-paragraph8",
            "label-book1-lesson14_section2-paragraph9",
            "label-book1-lesson14_section2-paragraph9",
            "label-book1-lesson14_section2-paragraph10",
            "label-book1-lesson14_section2-paragraph11",
            "label-book1-lesson14_section2-paragraph12",
            "label-book1-lesson14_section2-paragraph7",
            "label-book1-lesson14_section2-paragraph13"
          ]
        }
      ]
    },
    {
      id: "16",
      bookId: "1",
      title: "label-book1-lesson16-title",
      color: "purple",
      audio: "Ettehijjatu",
      quoteText: "label-book1-lesson16-quote",
      quoteReference: "label-book1-lesson16-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson16_section1-paragraph1"
          ]
        },
        
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson16_section2-paragraph1",
            "label-book1-lesson16_section2-paragraph2",
            "label-book1-lesson16_section2-paragraph3",
            "label-book1-lesson16_section2-paragraph4",
            "label-book1-lesson16_section2-paragraph5"
           
            
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson16_section3-paragraph1",
            "label-book1-lesson16_section3-paragraph2",
            "label-book1-lesson16_section3-paragraph3",
            "label-book1-lesson16_section3-paragraph4",
            "label-book1-lesson16_section3-paragraph5"
            
          ]
        }
      ]
    },
    {
      id: "17",
      bookId: "1",
      title: "label-book1-lesson17-title",
      color: "purple",
      audio: "Salavati",
      quoteText: "label-book1-lesson17-quote",
      quoteReference: "label-book1-lesson17-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson17_section1-paragraph1"
          ]
        },
        
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson17_section2-paragraph1",
            "label-book1-lesson17_section2-paragraph2",
            "label-book1-lesson17_section2-paragraph3",
            "label-book1-lesson17_section2-paragraph4",
            "label-book1-lesson17_section2-paragraph5",
            "label-book1-lesson17_section2-paragraph3"
           
            
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson17_section3-paragraph1",
            "label-book1-lesson17_section3-paragraph2",
            "label-book1-lesson17_section3-paragraph3",
            "label-book1-lesson17_section3-paragraph4",
            "label-book1-lesson17_section3-paragraph5",
            "label-book1-lesson17_section3-paragraph3"
            
          ]
        }
      ]
    },
    {
      id: "18",
      bookId: "1",
      title: "label-book1-lesson18-title",
      color: "purple",
      audio: "dova",
      quoteText: "label-book1-lesson18-quote",
      quoteReference: "label-book1-lesson18-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson18_section1-paragraph1"
          ]
        },
        
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson18_section2-paragraph1",
            "label-book1-lesson18_section2-paragraph2",
            "label-book1-lesson18_section2-paragraph3",
            "label-book1-lesson18_section2-paragraph4",
            "label-book1-lesson18_section2-paragraph5",
            "label-book1-lesson18_section2-paragraph6"
           
            
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson18_section3-paragraph1",
            "label-book1-lesson18_section3-paragraph2",
            "label-book1-lesson18_section3-paragraph3",
            "label-book1-lesson18_section3-paragraph4",
            "label-book1-lesson18_section3-paragraph5",
            "label-book1-lesson18_section3-paragraph6"
            
          ]
        }
      ]
    },
    {
      id: "26",
      bookId: "1",
      title: "label-book1-lesson26-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book1-lesson26-quote",
      quoteReference: "label-book1-lesson26-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson26_section1-paragraph1",
              "label-book1-lesson26_section1-paragraph2",
              "label-book1-lesson26_section1-paragraph3",
              "label-book1-lesson26_section1-paragraph4",
              "label-book1-lesson26_section1-paragraph5",
              "label-book1-lesson26_section1-paragraph6"
          ]
        }
        
       
      ]
    },
    {
      id: "26",
      bookId: "1",
      title: "label-book1-lesson26-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book1-lesson26-quote",
      quoteReference: "label-book1-lesson26-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson26_section1-paragraph1",
              "label-book1-lesson26_section1-paragraph2",
              "label-book1-lesson26_section1-paragraph3",
              "label-book1-lesson26_section1-paragraph4",
              "label-book1-lesson26_section1-paragraph5"
          ]
        }
        
       
      ]
    },
    {
      id: "27",
      bookId: "1",
      title: "label-book1-lesson27-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book1-lesson27-quote",
      quoteReference: "label-book1-lesson27-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson27_section1-paragraph1",
              "label-book1-lesson27_section1-paragraph2",
              "label-book1-lesson27_section1-paragraph3",
              "label-book1-lesson27_section1-paragraph4"
          ]
        }
        
       
      ]
    },
    {
      id: "28",
      bookId: "1",
      title: "label-book1-lesson28-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book1-lesson28-quote",
      quoteReference: "label-book1-lesson28-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson28_section1-paragraph1",
              "label-book1-lesson28_section1-paragraph2",
              "label-book1-lesson28_section1-paragraph3"
          ]
        }
        
       
      ]
    },
    {
      id: "29",
      bookId: "1",
      title: "label-book1-lesson29-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book1-lesson29-quote",
      quoteReference: "label-book1-lesson29-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson29_section1-paragraph1",
              "label-book1-lesson29_section1-paragraph2",
              "label-book1-lesson29_section1-paragraph3"
          ]
        }
        
       
      ]
    },
    {
      id: "30",
      bookId: "1",
      title: "label-book1-lesson30-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book1-lesson30-quote",
      quoteReference: "label-book1-lesson30-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson30_section1-paragraph1",
              "label-book1-lesson30_section1-paragraph2"
          ]
        },
       
      ]
    },
    {
      id: "32",
      bookId: "1",
      title: "label-book1-lesson32-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book1-lesson32-quote",
      quoteReference: "label-book1-lesson32-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson32_section1-paragraph1"
          ]
        },
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson32_section2-paragraph1"
          ]
        } ,
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson32_section3-paragraph1"
          ]
        }   
       
      ]
    },
    {
      id: "33",
      bookId: "1",
      title: "label-book1-lesson33-title",
      color: "razimic",
      audio: "",
      quoteText: "label-book1-lesson33-quote",
      quoteReference: "label-book1-lesson33-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson33_section1-paragraph1"
          ]
        },
        {
          type:"0",
          paragraphs: [
              "label-book1-lesson33_section2-paragraph1"
          ]
        } 
       
      ]
    },
  
    {
      id: "35",
      bookId: "1",
      title: "label-book1-lesson35-title",
      color: "burgundy",
      audio: "Allahumme",
      quoteText: "label-book1-lesson35-quote",
      quoteReference: "label-book1-lesson35-quote-reference",
      sections: [
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson35_section1-paragraph1",
            "label-book1-lesson35_section1-paragraph2",
            "label-book1-lesson35_section1-paragraph3"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson35_section2-paragraph1",
            "label-book1-lesson35_section2-paragraph2",
            "label-book1-lesson35_section2-paragraph3"
          ]
        }
      ]
    },
    {
      id: "36",
      bookId: "1",
      title: "label-book1-lesson36-title",
      color: "burgundy",
      audio: "ZikrSalavat",
      quoteText: "label-book1-lesson36-quote",
      quoteReference: "label-book1-lesson36-quote-reference",
      sections: [
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson36_section1-paragraph1",
            "label-book1-lesson36_section1-paragraph2",
            "label-book1-lesson36_section1-paragraph3"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson36_section2-paragraph1",
            "label-book1-lesson36_section2-paragraph2",
            "label-book1-lesson36_section2-paragraph3"
          ]
        }
      ]
    },
    {
      id: "37",
      bookId: "1",
      title: "label-book1-lesson37-title",
      color: "burgundy",
      audio: "ZikrHamd",
      quoteText: "label-book1-lesson37-quote",
      quoteReference: "label-book1-lesson37-quote-reference",
      sections: [
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson37_section1-paragraph1",
            "label-book1-lesson37_section1-paragraph2",
            "label-book1-lesson37_section1-paragraph3",
            "label-book1-lesson37_section1-paragraph4"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson37_section2-paragraph1",
            "label-book1-lesson37_section2-paragraph2",
            "label-book1-lesson37_section2-paragraph3",
            "label-book1-lesson37_section2-paragraph4"
          ]
        }
      ]
    },
    {
      id: "38",
      bookId: "1",
      title: "label-book1-lesson38-title",
      color: "burgundy",
      audio: "Ajetulkursijje",
      quoteText: "label-book1-lesson38-quote",
      quoteReference: "label-book1-lesson38-quote-reference",
      sections: [
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson38_section1-paragraph1",
            "label-book1-lesson38_section1-paragraph2",
            "label-book1-lesson38_section1-paragraph3",
            "label-book1-lesson38_section1-paragraph4",
            "label-book1-lesson38_section1-paragraph5",
            "label-book1-lesson38_section1-paragraph6",
            "label-book1-lesson38_section1-paragraph7",
            "label-book1-lesson38_section1-paragraph8",
            "label-book1-lesson38_section1-paragraph9",
            "label-book1-lesson38_section1-paragraph10"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson38_section2-paragraph1",
            "label-book1-lesson38_section2-paragraph2",
            "label-book1-lesson38_section2-paragraph3",
            "label-book1-lesson38_section2-paragraph4",
            "label-book1-lesson38_section2-paragraph5",
            "label-book1-lesson38_section2-paragraph6",
            "label-book1-lesson38_section2-paragraph7",
            "label-book1-lesson38_section2-paragraph8",
            "label-book1-lesson38_section2-paragraph9",
            "label-book1-lesson38_section2-paragraph10"
          ]
        }
      ]
    },
    {
      id: "39",
      bookId: "1",
      title: "label-book1-lesson39-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book1-lesson39-quote",
      quoteReference: "label-book1-lesson39-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
            "label-book1-lesson39_section1-paragraph1",
            "label-book1-lesson39_section1-paragraph2",
            "label-book1-lesson39_section1-paragraph3"
          ]
        }
        
      ]
    },
  
    {
      id: "40",
      bookId: "1",
      title: "label-book1-lesson40-title",
      color: "burgundy",
      audio: "ZikrKebiren",
      quoteText: "label-book1-lesson40-quote",
      quoteReference: "label-book1-lesson40-quote-reference",
      sections: [
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson40_section1-paragraph1",
            "label-book1-lesson40_section1-paragraph2",
            "label-book1-lesson40_section1-paragraph3",
            "label-book1-lesson40_section1-paragraph4",
            "label-book1-lesson40_section1-paragraph5"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson40_section2-paragraph1",
            "label-book1-lesson40_section2-paragraph2",
            "label-book1-lesson40_section2-paragraph3",
            "label-book1-lesson40_section2-paragraph4",
            "label-book1-lesson40_section2-paragraph5"
          ]
        }
      ]
    },
    {
      id: "41",
      bookId: "1",
      title: "label-book1-lesson41-title",
      color: "burgundy",
      audio: "NamaskaDova",
      quoteText: "label-book1-lesson41-quote",
      quoteReference: "label-book1-lesson41-quote-reference",
      sections: [
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson41_section1-paragraph1",
            "label-book1-lesson41_section1-paragraph2",
            "label-book1-lesson41_section1-paragraph3",
            "label-book1-lesson41_section1-paragraph4",
            "label-book1-lesson41_section1-paragraph5",
            "label-book1-lesson41_section1-paragraph6",
            "label-book1-lesson41_section1-paragraph7",
            "label-book1-lesson41_section1-paragraph8",
            "label-book1-lesson41_section1-paragraph9",
            "label-book1-lesson41_section1-paragraph10",
            "label-book1-lesson41_section1-paragraph11"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book1-lesson41_section2-paragraph1",
            "label-book1-lesson41_section2-paragraph2",
            "label-book1-lesson41_section2-paragraph3",
            "label-book1-lesson41_section2-paragraph4",
            "label-book1-lesson41_section2-paragraph5",
            "label-book1-lesson41_section2-paragraph6",
            "label-book1-lesson41_section2-paragraph7",
            "label-book1-lesson41_section2-paragraph8",
            "label-book1-lesson41_section2-paragraph9",
            "label-book1-lesson41_section2-paragraph10",
            "label-book1-lesson41_section2-paragraph11"
          ]
        }
      ]
    },
    
  
    {
      id: "1",
      bookId: "2",
      title: "label-book2-lesson1-title",
      color: "dark-brown",
      audio: "",
      quoteText: "label-book2-lesson1-quote",
      quoteReference: "label-book2-lesson1-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson1_section1-paragraph1",
              "label-book2-lesson1_section1-paragraph2",
              "label-book2-lesson1_section1-paragraph3",
              "label-book2-lesson1_section1-paragraph4",
              "label-book2-lesson1_section1-paragraph5",
              "label-book2-lesson1_section1-paragraph6",
              "label-book2-lesson1_section1-paragraph7"
          ]
        }     
      ]
    },
    {
      id: "2",
      bookId: "2",
      title: "label-book2-lesson2-title",
      color: "dark-brown",
      audio: "",
      quoteText: "label-book2-lesson2-quote",
      quoteReference: "label-book2-lesson2-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson2_section1-paragraph1",
              "label-book2-lesson2_section1-paragraph2",
              "label-book2-lesson2_section1-paragraph3",
              "label-book2-lesson2_section1-paragraph4",
              "label-book2-lesson2_section1-paragraph5",
              "label-book2-lesson2_section1-paragraph6",
              "label-book2-lesson2_section1-paragraph7"
          ]
        }     
      ]
    },
    {
      id: "3",
      bookId: "2",
      title: "label-book2-lesson3-title",
      color: "dark-brown",
      audio: "",
      quoteText: "label-book2-lesson3-quote",
      quoteReference: "label-book2-lesson3-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson3_section1-paragraph1",
              "label-book2-lesson3_section1-paragraph2"
          ]
        }     
      ]
    },
    {
      id: "4",
      bookId: "2",
      title: "label-book2-lesson4-title",
      color: "dark-brown",
      audio: "",
      quoteText: "label-book2-lesson4-quote",
      quoteReference: "label-book2-lesson4-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson4_section1-paragraph1",
              "label-book2-lesson4_section1-paragraph2"
          ]
        }     
      ]
    },
    {
      id: "5",
      bookId: "2",
      title: "label-book2-lesson5-title",
      color: "dark-brown",
      audio: "",
      quoteText: "label-book2-lesson5-quote",
      quoteReference: "label-book2-lesson5-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson5_section1-paragraph1",
              "label-book2-lesson5_section1-paragraph2",
              "label-book2-lesson5_section1-paragraph3"
          ]
        }     
      ]
    },
    {
      id: "6",
      bookId: "2",
      title: "label-book2-lesson6-title",
      color: "dark-brown",
      audio: "",
      quoteText: "label-book2-lesson6-quote",
      quoteReference: "label-book2-lesson6-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson6_section1-paragraph1",
              "label-book2-lesson6_section1-paragraph2"
          ]
        }     
      ]
    },
    {
      id: "7",
      bookId: "2",
      title: "label-book2-lesson7-title",
      color: "dark-brown",
      audio: "",
      quoteText: "label-book2-lesson7-quote",
      quoteReference: "label-book2-lesson7-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson7_section1-paragraph1"
          ]
        }     
      ]
    },
    {
      id: "8",
      bookId: "2",
      title: "label-book2-lesson8-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book2-lesson8-quote",
      quoteReference: "label-book2-lesson8-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson8_section1-paragraph1",
              "label-book2-lesson8_section1-paragraph2",
              "label-book2-lesson8_section1-paragraph3",
              "label-book2-lesson8_section1-paragraph4",
              "label-book2-lesson8_section1-paragraph5"
          ]
        }     
      ]
    },
    {
      id: "9",
      bookId: "2",
      title: "label-book2-lesson9-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book2-lesson9-quote",
      quoteReference: "label-book2-lesson9-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson9_section1-paragraph1"
          ]
        },
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson9_section2-paragraph1",
              "label-book2-lesson9_section2-paragraph2",
              "label-book2-lesson9_section2-paragraph3",
              "label-book2-lesson9_section2-paragraph4"
          ]
        },
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson9_section3-paragraph1",
              "label-book2-lesson9_section3-paragraph2",
              "label-book2-lesson9_section3-paragraph3",
              "label-book2-lesson9_section3-paragraph4"
          ]
        }     
      ]
    },
    {
      id: "10",
      bookId: "2",
      title: "label-book2-lesson10-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book2-lesson10-quote",
      quoteReference: "label-book2-lesson10-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson10_section1-paragraph1",
              "label-book2-lesson10_section1-paragraph2",
              "label-book2-lesson10_section1-paragraph3",
              "label-book2-lesson10_section1-paragraph4"
          ]
        }     
      ]
    },
    {
      id: "15",
      bookId: "2",
      title: "label-book2-lesson15-title",
      color: "purple",
      audio: "",
      quoteText: "label-book2-lesson15-quote",
      quoteReference: "label-book2-lesson15-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson15_section1-paragraph1"
          ]
        }     
      ]
    },
    {
      id: "16",
      bookId: "2",
      title: "label-book2-lesson16-title",
      color: "purple",
      audio: "",
      quoteText: "label-book2-lesson16-quote",
      quoteReference: "label-book2-lesson16-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson16_section1-paragraph1"
          ]
        }     
      ]
    },
    {
      id: "17",
      bookId: "2",
      title: "label-book2-lesson17-title",
      color: "purple",
      audio: "",
      quoteText: "label-book2-lesson17-quote",
      quoteReference: "label-book2-lesson17-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson17_section1-paragraph1"
          ]
        },
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson17_section2-paragraph1",
              "label-book2-lesson17_section2-paragraph2",
              "label-book2-lesson17_section2-paragraph3",
              "label-book2-lesson17_section2-paragraph4"
          ]
        }     
      ]
    },
    {
      id: "18",
      bookId: "2",
      title: "label-book2-lesson18-title",
      color: "purple",
      audio: "",
      quoteText: "label-book2-lesson18-quote",
      quoteReference: "label-book2-lesson18-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson18_section1-paragraph1",
              "label-book2-lesson18_section1-paragraph2"
          ]
        }
        
      ]
    },
    {
      id: "19",
      bookId: "2",
      title: "label-book2-lesson19-title",
      color: "purple",
      audio: "",
      quoteText: "label-book2-lesson19-quote",
      quoteReference: "label-book2-lesson19-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson19_section1-paragraph1"
          ]
        },
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson19_section2-paragraph1"
          ]
        }
        
      ]
    },
    {
      id: "20",
      bookId: "2",
      title: "label-book2-lesson20-title",
      color: "purple",
      audio: "",
      quoteText: "label-book2-lesson20-quote",
      quoteReference: "label-book2-lesson20-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson20_section1-paragraph1"
          ]
        }      
      ]
    },
    {
      id: "21",
      bookId: "2",
      title: "label-book2-lesson21-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book2-lesson21-quote",
      quoteReference: "label-book2-lesson21-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson21_section1-paragraph1",
              "label-book2-lesson21_section1-paragraph2",
              "label-book2-lesson21_section1-paragraph3"
          ]
        }      
      ]
    },
    {
      id: "22",
      bookId: "2",
      title: "label-book2-lesson22-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book2-lesson22-quote",
      quoteReference: "label-book2-lesson22-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson22_section1-paragraph1",
              "label-book2-lesson22_section1-paragraph2",
              "label-book2-lesson22_section1-paragraph3",
              "label-book2-lesson22_section1-paragraph4",
              "label-book2-lesson22_section1-paragraph5",
              "label-book2-lesson22_section1-paragraph6"
          ]
        }      
      ]
    },
    {
      id: "23",
      bookId: "2",
      title: "label-book2-lesson23-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book2-lesson23-quote",
      quoteReference: "label-book2-lesson23-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson23_section1-paragraph1",
              "label-book2-lesson23_section1-paragraph2",
              "label-book2-lesson23_section1-paragraph3",
              "label-book2-lesson23_section1-paragraph4",
              "label-book2-lesson23_section1-paragraph5"
          ]
        }      
      ]
    },
    {
      id: "24",
      bookId: "2",
      title: "label-book2-lesson24-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book2-lesson24-quote",
      quoteReference: "label-book2-lesson24-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson24_section1-paragraph1"
          ]
        }      
      ]
    },
    {
      id: "25",
      bookId: "2",
      title: "label-book2-lesson25-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book2-lesson25-quote",
      quoteReference: "label-book2-lesson25-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson25_section1-paragraph1"
          ]
        }      
      ]
    },
    {
      id: "26",
      bookId: "2",
      title: "label-book2-lesson26-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book2-lesson26-quote",
      quoteReference: "label-book2-lesson26-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson26_section1-paragraph1",
              "label-book2-lesson26_section1-paragraph2",
              "label-book2-lesson26_section1-paragraph3"
          ]
        }      
      ]
    },
    {
      id: "27",
      bookId: "2",
      title: "label-book2-lesson27-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book2-lesson27-quote",
      quoteReference: "label-book2-lesson27-quote-reference",
      sections: [
        {
          type:"0",
          paragraphs: [
              "label-book2-lesson27_section1-paragraph1",
              "label-book2-lesson27_section1-paragraph2",
              "label-book2-lesson27_section1-paragraph3",
              "label-book2-lesson27_section1-paragraph4"
          ]
        }      
      ]
    },
    {
      id: "28",
      bookId: "2",
      title: "label-book2-lesson28-title",
      color: "razimic",
      audio: "Leheb",
      quoteText: "label-book2-lesson28-quote",
      quoteReference: "label-book2-lesson28-quote-reference",
      sections: [
         {
          type:"1",
          paragraphs: [
            "label-book2-lesson28_section1-paragraph1",
            "label-book2-lesson28_section1-paragraph2",
            "label-book2-lesson28_section1-paragraph3",
            "label-book2-lesson28_section1-paragraph4",
            "label-book2-lesson28_section1-paragraph5"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book2-lesson28_section1-paragraph6",
            "label-book2-lesson28_section1-paragraph7",
            "label-book2-lesson28_section1-paragraph8",
            "label-book2-lesson28_section1-paragraph9",
            "label-book2-lesson28_section1-paragrap10"
          ]
        }
      ]
    },
    {
      id: "29",
      bookId: "2",
      title: "label-book2-lesson29-title",
      color: "razimic",
      audio: "Nasr",
      quoteText: "label-book2-lesson29-quote",
      quoteReference: "label-book2-lesson29-quote-reference",
      sections: [
         {
          type:"1",
          paragraphs: [
            "label-book2-lesson29_section1-paragraph1",
            "label-book2-lesson29_section1-paragraph2",
            "label-book2-lesson29_section1-paragraph3"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book2-lesson29_section1-paragraph4",
            "label-book2-lesson29_section1-paragraph5",
            "label-book2-lesson29_section1-paragraph6"
          ]
        }
      ]
    },
    {
      id: "30",
      bookId: "2",
      title: "label-book2-lesson30-title",
      color: "razimic",
      audio: "Kafirun",
      quoteText: "label-book2-lesson30-quote",
      quoteReference: "label-book2-lesson30-quote-reference",
      sections: [
        {
          type:"1",
          paragraphs: [
            "label-book2-lesson30_section1-paragraph1",
            "label-book2-lesson30_section1-paragraph2",
            "label-book2-lesson30_section1-paragraph3",
            "label-book2-lesson30_section1-paragraph4",
            "label-book2-lesson30_section1-paragraph5",
            "label-book2-lesson30_section1-paragraph6"
          ]
        },
        {
          type:"1",
          paragraphs: [
            "label-book2-lesson30_section1-paragraph7",
            "label-book2-lesson30_section1-paragraph8",
            "label-book2-lesson30_section1-paragraph9",
            "label-book2-lesson30_section1-paragraph10",
            "label-book2-lesson30_section1-paragraph11",
            "label-book2-lesson30_section1-paragraph12"
          ]
        }
      ]
    },
    {
      id: "3",
      bookId: "3",
      title: "label-book3-lesson3-title",
      color: "purple",
      audio: "",
      quoteText: "label-book3-lesson3-quote",
      quoteReference: "label-book3-lesson3-quote-reference",
      sections: [
         {
          type:"2",
          header:"label-book3-lesson3_section1-header",
          paragraphs: [
            "label-book3-lesson3_section1-paragraph1",
            "label-book3-lesson3_section1-paragraph2"
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson3_section2-header",
          paragraphs: [
            "label-book3-lesson3_section2-paragraph1",
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson3_section3-header",
          paragraphs: [
            "label-book3-lesson3_section3-paragraph1",
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson3_section4-header",
          paragraphs: [
            "label-book3-lesson3_section4-paragraph1",
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson3_section5-header",
          paragraphs: [
            "label-book3-lesson3_section5-paragraph1",
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson3_section6-header",
          paragraphs: [
            "label-book3-lesson3_section6-paragraph1",
            
          ]
        }
      ]
    },
    {
      id: "4",
      bookId: "3",
      title: "label-book3-lesson4-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book3-lesson4-quote",
      quoteReference: "label-book3-lesson4-quote-reference",
      sections: [
         {
          type:"2",
          header:"label-book3-lesson4_section1-header",
          paragraphs: [
            "label-book3-lesson4_section1-paragraph1",
            "label-book3-lesson4_section1-paragraph2"
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson4_section2-header",
          paragraphs: [
            "label-book3-lesson4_section2-paragraph1",
            "label-book3-lesson4_section2-paragraph2"
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson4_section3-header",
          paragraphs: [
            "label-book3-lesson4_section3-paragraph1"
            
          ]
        }
      ]
    },
    {
      id: "6",
      bookId: "3",
      title: "label-book3-lesson6-title",
      color: "purple",
      audio: "",
      quoteText: "label-book3-lesson6-quote",
      quoteReference: "label-book3-lesson6-quote-reference",
      sections: [
         {
          type:"2",
          header:"label-book3-lesson6_section1-header",
          paragraphs: [
            "label-book3-lesson6_section1-paragraph1"
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson6_section2-header",
          paragraphs: [
            "label-book3-lesson6_section2-paragraph1"
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson6_section3-header",
          paragraphs: [
            "label-book3-lesson6_section3-paragraph1"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson6_section4-header",
          paragraphs: [
            "label-book3-lesson6_section4-paragraph1"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson6_section5-header",
          paragraphs: [
            "label-book3-lesson6_section5-paragraph1"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson6_section6-header",
          paragraphs: [
            "label-book3-lesson6_section6-paragraph1"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson6_section7-header",
          paragraphs: [
            "label-book3-lesson6_section7-paragraph1"
            
          ]
        }
      ]
    },
    {
      id: "13",
      bookId: "3",
      title: "label-book3-lesson13-title",
      color: "purple",
      audio: "",
      quoteText: "label-book3-lesson13-quote",
      quoteReference: "label-book3-lesson13-quote-reference",
      sections: [
         {
          type:"0",
          
          paragraphs: [
            "label-book3-lesson13_section1-paragraph1"
          ]
        }
      ]
    },
    {
      id: "14",
      bookId: "3",
      title: "label-book3-lesson14-title",
      color: "razimic",
      audio: "",
      quoteText: "label-book3-lesson14-quote",
      quoteReference: "label-book3-lesson14-quote-reference",
      sections: [
         {
          type:"0",
          
          paragraphs: [
            "label-book3-lesson14_section1-paragraph1",
            "label-book3-lesson14_section1-paragraph2"
          ]
        },
        {
          type:"0",
          
          paragraphs: [
            "label-book3-lesson14_section2-paragraph1",
            "label-book3-lesson14_section2-paragraph2"
          ]
        },
        {
          type:"0",
          
          paragraphs: [
            "label-book3-lesson14_section3-paragraph1",
            "label-book3-lesson14_section3-paragraph2"
          ]
        },
        {
          type:"0",
          
          paragraphs: [
            "label-book3-lesson14_section4-paragraph1",
            "label-book3-lesson14_section4-paragraph2"
          ]
        },
        {
          type:"0",
          
          paragraphs: [
            "label-book3-lesson14_section5-paragraph1",
            "label-book3-lesson14_section5-paragraph2"
          ]
        },
        {
          type:"0",
          
          paragraphs: [
            "label-book3-lesson14_section6-paragraph1",
            "label-book3-lesson14_section6-paragraph2"
          ]
        },
        {
          type:"0",
          
          paragraphs: [
            "label-book3-lesson14_section7-paragraph1",
            "label-book3-lesson14_section7-paragraph2"
          ]
        },
        {
          type:"0",
          
          paragraphs: [
            "label-book3-lesson14_section8-paragraph1",
            "label-book3-lesson14_section8-paragraph2"
          ]
        }
      ]
    },
    {
      id: "17",
      bookId: "3",
      title: "label-book3-lesson17-title",
      color: "razimic",
      audio: "",
      quoteText: "label-book3-lesson17-quote",
      quoteReference: "label-book3-lesson17-quote-reference",
      sections: [
         {
          type:"0",
          
          paragraphs: [
            "label-book3-lesson17_section1-paragraph1",
            "label-book3-lesson17_section1-paragraph2"
          ]
        }
      ]
    },
    {
      id: "18",
      bookId: "3",
      title: "label-book3-lesson18-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book3-lesson18-quote",
      quoteReference: "label-book3-lesson18-quote-reference",
      sections: [
         {
          type:"0",
          
          paragraphs: [
            "label-book3-lesson18_section1-paragraph1",
            "label-book3-lesson18_section1-paragraph2"
          ]
        }
      ]
    },
    {
      id: "19",
      bookId: "3",
      title: "label-book3-lesson19-title",
      color: "purple",
      audio: "",
      quoteText: "label-book3-lesson19-quote",
      quoteReference: "label-book3-lesson19-quote-reference",
      sections: [
         {
          type:"2",
          header:"label-book3-lesson19_section1-header",
          paragraphs: [
            "label-book3-lesson19_section1-paragraph1",
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson19_section2-header",
          paragraphs: [
            "label-book3-lesson19_section2-paragraph1",
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson19_section3-header",
          paragraphs: [
            "label-book3-lesson19_section3-paragraph1"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson19_section4-header",
          paragraphs: [
            "label-book3-lesson19_section4-paragraph1"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson19_section5-header",
          paragraphs: [
            "label-book3-lesson19_section5-paragraph1"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson19_section6-header",
          paragraphs: [
            "label-book3-lesson19_section6-paragraph1"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson19_section7-header",
          paragraphs: [
            "label-book3-lesson19_section7-paragraph1"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson19_section8-header",
          paragraphs: [
            "label-book3-lesson19_section8-paragraph1"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson19_section9-header",
          paragraphs: [
            "label-book3-lesson19_section9-paragraph1"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson19_section10-header",
          paragraphs: [
            "label-book3-lesson19_section10-paragraph1"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson19_section11-header",
          paragraphs: [
            "label-book3-lesson19_section11-paragraph1",
            "label-book3-lesson19_section11-paragraph2",
            "label-book3-lesson19_section11-paragraph3",
            "label-book3-lesson19_section11-paragraph4",
            "label-book3-lesson19_section11-paragraph5",
            "label-book3-lesson19_section11-paragraph6"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson19_section12-header",
          paragraphs: [
            "label-book3-lesson19_section12-paragraph1",
            "label-book3-lesson19_section12-paragraph2",
            "label-book3-lesson19_section12-paragraph3",
            "label-book3-lesson19_section12-paragraph4",
            "label-book3-lesson19_section12-paragraph5",
            "label-book3-lesson19_section12-paragraph6"
            
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson19_section13-header",
          paragraphs: [
            "label-book3-lesson19_section13-paragraph1"
            
          ]
        }
      ]
    },
    {
      id: "21",
      bookId: "3",
      title: "label-book3-lesson21-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book3-lesson21-quote",
      quoteReference: "label-book3-lesson21-quote-reference",
      sections: [
         {
          type:"2",
          header:"label-book3-lesson21_section1-header",
          paragraphs: [
            "label-book3-lesson21_section1-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson21_section2-header",
          paragraphs: [
            "label-book3-lesson21_section2-paragraph1",
            "label-book3-lesson21_section2-paragraph2",
            "label-book3-lesson21_section2-paragraph3",
            "label-book3-lesson21_section2-paragraph4",
            "label-book3-lesson21_section2-paragraph5",
            "label-book3-lesson21_section2-paragraph6"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson21_section3-header",
          paragraphs: [
            "label-book3-lesson21_section3-paragraph1",
            "label-book3-lesson21_section3-paragraph2",
            "label-book3-lesson21_section3-paragraph3",
            "label-book3-lesson21_section3-paragraph4",
            "label-book3-lesson21_section3-paragraph5",
            "label-book3-lesson21_section3-paragraph6",
            "label-book3-lesson21_section3-paragraph7"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson21_section4-header",
          paragraphs: [
            "label-book3-lesson21_section4-paragraph1",
            "label-book3-lesson21_section4-paragraph2",
            "label-book3-lesson21_section4-paragraph3"        
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson21_section5-header",
          paragraphs: [
            "label-book3-lesson21_section5-paragraph1",
            "label-book3-lesson21_section5-paragraph2",
            "label-book3-lesson21_section5-paragraph3",
            "label-book3-lesson21_section5-paragraph4",
            "label-book3-lesson21_section5-paragraph5"        
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson21_section6-header",
          paragraphs: [
            "label-book3-lesson21_section6-paragraph1",
            "label-book3-lesson21_section6-paragraph2",
            "label-book3-lesson21_section6-paragraph3",
            "label-book3-lesson21_section6-paragraph4",
            "label-book3-lesson21_section6-paragraph5",
            "label-book3-lesson21_section6-paragraph6"        
          ]
        }
      ]
    },
    {
      id: "23",
      bookId: "3",
      title: "label-book3-lesson23-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book3-lesson23-quote",
      quoteReference: "label-book3-lesson23-quote-reference",
      sections: [
         {
          type:"2",
          header:"label-book3-lesson23_section1-header",
          paragraphs: [
            "label-book3-lesson23_section1-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson23_section2-header",
          paragraphs: [
            "label-book3-lesson23_section2-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson23_section3-header",
          paragraphs: [
            "label-book3-lesson23_section3-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson23_section4-header",
          paragraphs: [
            "label-book3-lesson23_section4-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson23_section5-header",
          paragraphs: [
            "label-book3-lesson23_section5-paragraph1"           
          ]
        }
        
      ]
    },
    {
      id: "24",
      bookId: "3",
      title: "label-book3-lesson24-title",
      color: "burgundy",
      audio: "",
      quoteText: "label-book3-lesson24-quote",
      quoteReference: "label-book3-lesson24-quote-reference",
      sections: [
         {
          type:"0",
          paragraphs: [
            "label-book3-lesson24_section1-paragraph1",
            "label-book3-lesson24_section1-paragraph2",
            "label-book3-lesson24_section1-paragraph3",
            "label-book3-lesson24_section1-paragraph4",
            "label-book3-lesson24_section1-paragraph5",
            "label-book3-lesson24_section1-paragraph6",
            "label-book3-lesson24_section1-paragraph7",
            "label-book3-lesson24_section1-paragraph8",
            "label-book3-lesson24_section1-paragraph9",
            "label-book3-lesson24_section1-paragraph10",
            "label-book3-lesson24_section1-paragraph11",
            "label-book3-lesson24_section1-paragraph12"
          ]
        }
        
      ]
    },
    {
      id: "25",
      bookId: "3",
      title: "label-book3-lesson25-title",
      color: "brown",
      audio: "",
      quoteText: "label-book3-lesson25-quote",
      quoteReference: "label-book3-lesson25-quote-reference",
      sections: [
         {
          type:"2",
          header:"label-book3-lesson25_section1-header",
          paragraphs: [
            "label-book3-lesson25_section1-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson25_section2-header",
          paragraphs: [
            "label-book3-lesson25_section2-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson25_section3-header",
          paragraphs: [
            "label-book3-lesson25_section3-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson25_section4-header",
          paragraphs: [
            "label-book3-lesson25_section4-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson25_section5-header",
          paragraphs: [
            "label-book3-lesson25_section5-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson25_section6-header",
          paragraphs: [
            "label-book3-lesson25_section6-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson25_section7-header",
          paragraphs: [
            "label-book3-lesson25_section7-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson25_section8-header",
          paragraphs: [
            "label-book3-lesson25_section8-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson25_section9-header",
          paragraphs: [
            "label-book3-lesson25_section9-paragraph1"           
          ]
        }
        
      ]
    },
    {
      id: "26",
      bookId: "3",
      title: "label-book3-lesson26-title",
      color: "purple",
      audio: "",
      quoteText: "label-book3-lesson26-quote",
      quoteReference: "label-book3-lesson26-quote-reference",
      sections: [
         {
          type:"2",
          header:"label-book3-lesson26_section1-header",
          paragraphs: [
            "label-book3-lesson26_section1-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section2-header",
          paragraphs: [
            "label-book3-lesson26_section2-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section3-header",
          paragraphs: [
            "label-book3-lesson26_section3-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section4-header",
          paragraphs: [
            "label-book3-lesson26_section4-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section5-header",
          paragraphs: [
            "label-book3-lesson26_section5-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section6-header",
          paragraphs: [
            "label-book3-lesson26_section6-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section7-header",
          paragraphs: [
            "label-book3-lesson26_section7-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section8-header",
          paragraphs: [
            "label-book3-lesson26_section8-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section9-header",
          paragraphs: [
            "label-book3-lesson26_section9-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section10-header",
          paragraphs: [
            "label-book3-lesson26_section10-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section11-header",
          paragraphs: [
            "label-book3-lesson26_section11-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section12-header",
          paragraphs: [
            "label-book3-lesson26_section12-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section13-header",
          paragraphs: [
            "label-book3-lesson26_section13-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section14-header",
          paragraphs: [
            "label-book3-lesson26_section14-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson26_section15-header",
          paragraphs: [
            "label-book3-lesson26_section15-paragraph1"           
          ]
        }
        
      ]
    },
    {
      id: "27",
      bookId: "3",
      title: "label-book3-lesson27-title",
      color: "purple",
      audio: "",
      quoteText: "label-book3-lesson27-quote",
      quoteReference: "label-book3-lesson27-quote-reference",
      sections: [
         {
          type:"2",
          header:"label-book3-lesson27_section1-header",
          paragraphs: [
            "label-book3-lesson27_section1-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson27_section2-header",
          paragraphs: [
            "label-book3-lesson27_section2-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson27_section3-header",
          paragraphs: [
            "label-book3-lesson27_section3-paragraph1"           
          ]
        }
        
      ]
    },
    {
      id: "28",
      bookId: "3",
      title: "label-book3-lesson28-title",
      color: "razimic",
      audio: "",
      quoteText: "label-book3-lesson28-quote",
      quoteReference: "label-book3-lesson28-quote-reference",
      sections: [
         {
          type:"2",
          header:"label-book3-lesson28_section1-header",
          paragraphs: [
            "label-book3-lesson28_section1-paragraph1",
            "label-book3-lesson28_section1-paragraph2"                  
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson28_section2-header",
          paragraphs: [
            "label-book3-lesson28_section2-paragraph1"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson28_section3-header",
          paragraphs: [
            "label-book3-lesson28_section3-paragraph1",
            "label-book3-lesson28_section3-paragraph2"           
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson28_section4-header",
          paragraphs: [
            "label-book3-lesson28_section4-paragraph1",
            "label-book3-lesson28_section4-paragraph2",
            "label-book3-lesson28_section4-paragraph3",
            "label-book3-lesson28_section4-paragraph4",
            "label-book3-lesson28_section4-paragraph5"          
          ]
        },
        {
          type:"2",
          header:"label-book3-lesson28_section5-header",
          paragraphs: [
            "label-book3-lesson28_section5-paragraph1",
            "label-book3-lesson28_section5-paragraph2"           
          ]
        }
        
      ]
    }
  ];