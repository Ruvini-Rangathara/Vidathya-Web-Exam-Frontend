interface Props {
    title: string;
    description : string;
    time: string;
    subject: string;
    onClick: ()=>void;
}
const GridItem =(props:Props) => {
    return (
        <div className={'w-[100%] h-[100%]'}>
            <button className={'w-[100%] h-[100%] bg-[white] flex flex-col rounded-lg p-4'} onClick={props.onClick}>
                <span className={'text-[15px] m-auto text-[#5A294C]'}>{props.title}</span>
                <span className={'text-[14px] m-auto text-[#795695]'}>{props.subject}</span>
                <span className={'text-[13px] m-auto'}>{props.description}</span>
                <span className={'text-[13px] m-auto'}>Duration : {props.time}</span>
            </button>
        </div>
    )
}

export default GridItem;