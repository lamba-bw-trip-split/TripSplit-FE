import React from 'react';
import Activity from '../Activity/Activity';

const ActivityList = props => {
  return (
    <div>
      {props.activities.map(activity => (
        <Activity activity={activity} key={activity.id} />
      ))}
    </div>
  );
};

export default ActivityList;
