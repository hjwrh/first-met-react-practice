import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "김현주",
        comment : "안녕하세요, hjkim 입니다.",
    },
    {
        name : "명언1",
        comment : "돈을 누가 벌어다 주지 않습니다. 내가 벌어야 합니다.",
    },
    {
        name : "명언2",
        comment : "누군가 나를 대신해서 해주는 사람은 없습니다. 공짜도 없습니다. 이 사실을 명심하세요",
    },
    {
        name : "명언3",
        comment : "쉬는 것 보다 작게라도 받고 일하는 것이 현명하다",
    },        
    {
        name : "명언4",
        comment : "몰입은 시간을 줄여 줍니다.",
    }        
]

function CommentList(props){
    return (
        <div>
            {
                comments.map((cmt) => {
                    return <Comment name = {cmt.name} comment={cmt.comment}/>
                })
            }
        </div>

    );    
}

export default CommentList;