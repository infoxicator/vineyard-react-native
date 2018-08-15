import React from 'react';
import { Image, View, Text } from 'react-native';
import { AllHtmlEntities } from 'html-entities';
import { Card, CardSection } from './common';

const EventCard = ({ event }) => {
        const entities = new AllHtmlEntities(); // define this somewhere else?
        const { rendered } = event.title;
        const title = entities.decode(rendered); //decode html entities
        const { source_url } = event.better_featured_image;
        const {
            headerContentStyles,
            headerTextStyle,
            imageStyle
        } = styles;
        return (
            <Card>
            <CardSection>
                    <Image
                    style={imageStyle} 
                    source={{ uri: source_url }} 
                    />
             </CardSection>
             <CardSection>
             <View style={headerContentStyles}>
                <Text style={headerTextStyle}>{title}</Text>
            </View>
            </CardSection>
            </Card>
        );
};

const styles = {
    headerContentStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default EventCard;
