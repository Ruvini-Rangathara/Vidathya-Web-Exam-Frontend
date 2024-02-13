import React, { ChangeEvent, KeyboardEvent } from 'react';

interface Props {
    type: string;
    name: string;
    placeholder?: string;
    label?: string;
    optional: boolean;
    callBack: Function;
    value?: string;
    onKeyDown?: Function; // New prop for handling keydown event
}

class Input extends React.Component<Props, object> {
    handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
        this.props.callBack(e, this.props.name);
    };

    handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && this.props.onKeyDown) {
            this.props.onKeyDown();
        }
    };

    render(): React.ReactElement {
        return (
            <div className={'m-2'}>
                <label htmlFor={this.props.name} className={'block'}>
                    {this.props.label} {!this.props.optional ? <span className="text-red-600">*</span> : null}
                </label>
                <input
                    type={this.props.type}
                    id={this.props.name}
                    placeholder={this.props.placeholder}
                    className={'bg-[white] rounded block border border-gray-200 outline-none focus:border-t-gray-400 p-2 h-6 w-full text-gray-700'}
                    onChange={this.handleInput}
                    onKeyDown={this.handleKeyDown}
                    value={this.props.value}
                />
            </div>
        );
    }
}

export default Input;