// const {bubbleSort} = require('./sorting'); for cjs moduling
//for ejs moduling
import sc,{bubbleSort} from './sorting.js'

console.log(bubbleSort([1,3,5,6,2,6,3,2,]));
console.log(sc([5,4,3,2,1,0]))


function upsert(repository, requestGeometry,index) {
    if (
      values[index].status === 'fulfilled' &&
      values[index].value.status === '200'
    ) {
      console.log(`${repository.name} passed`);
      repository.upsert({
        id: requestGeometry.dealId,
        dealId: requestGeometry.dealId,
        mapLayers: values[index]?.value?.data,
      });
    }
  }
  
  upsert(this.wetlandsRepository, requestGeometry, values, 0);
  upsert(this.elevationRepository, requestGeometry, values, 1);