
import Mock from 'mockjs';

export default Mock.mock('/table/data','get',{
  'list|8' : [{
    'name' : '@cname()',
    'id': '@id()',
    'gender': '@natural(0,1)',
    'age': '@natural(14, 25)',
  }]
})