const slugify = require('slugify');


module.exports = {
  beforeCreate: async (createdEvent) => {
    const { data } = createdEvent.params;
 
    if (data.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },
 
  beforeUpdate: async (updatedEvent) => {
    const { data } = updatedEvent.params;
 
    if (data.name) {
      data.slug = slugify(data.name, { lower: true });
    }
  },
};

