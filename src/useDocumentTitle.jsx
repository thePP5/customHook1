import { useEffect } from "react";

export default function useDocumentTitle(title){
    useEffect(()=>{
        const docTitle = document.title;
        document.title = docTitle + '🚀'
    },[title])
}