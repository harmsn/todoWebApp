export const sortByHighPriority = (array) => {
    const priorityMapping = {
      high: 1,
      medium: 2,
      low: 3
    };
  
    return array.sort((a, b) => {
      return priorityMapping[a.priority] - priorityMapping[b.priority];
    });
};

export const sortByMediumPriority = (array) => {
    const priorityMapping = {
      medium: 1,
      high: 2,
      low: 3
    };
  
    return array.sort((a, b) => {
      return priorityMapping[a.priority] - priorityMapping[b.priority];
    });
};

export const sortByLowPriority = (array) => {
    const priorityMapping = {
      high: 2,
      medium: 3,
      low: 1
    };
  
    return array.sort((a, b) => {
      return priorityMapping[a.priority] - priorityMapping[b.priority];
    });
};