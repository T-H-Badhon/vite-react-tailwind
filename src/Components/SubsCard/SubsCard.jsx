import React from 'react';
import Card from '../Card/Card';

const SubsCard = () => {
    const gymArray = [
        { id: 1,
             price: 50, 
             gymFeatures :[
            'Cardio Equipment',
            'Weightlifting Area',
            'Group Fitness Classes',
            'Sauna and Steam Room',
            'Indoor Swimming Pool'
          ]
        },
        { id: 2,
            price: 70,
            gymFeatures : [
                'Cardio Equipment',
                'Weightlifting Area',
                'Group Fitness Classes',
                'Sauna and Steam Room',
                'Indoor Swimming Pool',
                'Personal Training Sessions',
                'Yoga and Pilates Studio'
              ]
            },
        { id: 3, 
            price: 60, 
            gymFeatures : [
                'Cardio Equipment',
                'Weightlifting Area',
                'Group Fitness Classes',
                'Sauna and Steam Room',
                'Indoor Swimming Pool',
                'Personal Training Sessions',
                'Yoga and Pilates Studio',
                'Climbing Wall',
                'Basketball and Tennis Courts'
              ]
            }
      ];
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                gymArray.map(subscription=> <Card subscription={subscription} key={subscription.id}></Card> )
            }
        </div>
    );
};

export default SubsCard;