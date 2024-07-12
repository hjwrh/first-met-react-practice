import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    // {
    //     id: 2,
    //     message: "점심 식사 시간입니다.",
    // },
    // {
    //     id: 3,
    //     message: "이제 곧 미팅이 시작됩니다.",
    // },
];

var timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notifications: [],
        };

        console.log ( "Notification List 생성자 실행 되었습니다.");
        console.log ( "-----------------------------");
    }

    componentDidMount() {
        const xxx= this.state;
                console.log ( "########");
                console.log(xxx);
                console.log ( "########");
        timer = setInterval(() => {
            if (xxx.length < reservedNotifications.length){
                const index = xxx.length;

                // console.log ( "########");
                // console.log(index);
                // console.log ( "########");
                
                xxx.push(reservedNotifications[index]);
                this.setState({
                    notifications: xxx,        
                });
            } else {
                this.setState({
                    notifications:[],
                });
                clearInterval(timer);
            }
        },1000);
    }

    componentWillUnmount(){
        if (timer){
            clearInterval(timer);
        }
    }

    render() {
        return (
          <div>
            {this.state.notifications.map( (notification) => {
                return <Notification 
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} />;
            })}
          </div>  
        );
    }
}

export default NotificationList;