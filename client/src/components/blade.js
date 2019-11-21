import React, { Component } from 'react';

class blade extends Component {
    
    parseData = ( data ) => {
        return data.map( (data, i) => {
            let elementTag = data['tag'];
            let formattedEle = '';
            switch (elementTag) {
                case 'img':
                    formattedEle = React.createElement(elementTag, { src: data['source'], key:i , alt: data['alt'] ? data['alt'] : 'No Image Alt Text'})
                    break;
                case 'ul':
                    formattedEle = React.createElement( elementTag, { key:i },  this.parseData( data['copy'] ) )
                    break;
                case 'li':
                    
                    if( data.copy.tag === 'a' ){
                        console.log( 'Object' )
                    }else{
                        console.log( 'Not Object' )
                    }
                    break;
                default:
                    formattedEle = React.createElement(elementTag, { key: i }, data['copy'])
            }
            return formattedEle
        });
    }

    render(){

        return(
            <div id={`${this.props.data.link}`} className={`info-blade`}>
                <div>
                    {this.parseData( this.props.data.content )}
                </div>
            </div>
        )
    }
}

export default blade;