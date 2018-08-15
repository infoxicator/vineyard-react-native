import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, TouchableOpacity, View, Text, SegmentedControlIOS } from 'react-native';
import { eventFetch } from '../actions';
import EventCard from './EventCard';

class EventList extends Component {
    
    state = { selectedIndex: 1 };


    componentWillMount() {
        console.log(this.props);
        this.props.eventFetch();

        this.createDataSource(this.props);       
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ events }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(events);
    }

    onEventPress() {
        console.log('pressed');
        this.props.navigation.navigate('Details');
    }

    renderRow(event) {
    return (
        
        <EventCard event={event} />

    );
    }

    render() {
        return (
            <View>
            <SegmentedControlIOS
            values={['One', 'Two']}
            selectedIndex={this.state.selectedIndex}
            onChange={(event) => {
              this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
            }}
            />
            
        <TouchableOpacity onPress={this.onEventPress}>
        <Text>Press me </Text>
        </TouchableOpacity>
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
            </View>
        );
    }
}

const mapStateToProps = state => {
    const events = state.events;
    return { events };
};

export default connect(mapStateToProps, { eventFetch })(EventList);
