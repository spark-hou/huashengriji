/**
 * @author  sparkHou
 * @date 2020-04-23 13:30
 * @Description:
 */
import {lazy} from 'react';


const routeList = [
  {
    path: '/',
    component: lazy(() => import( '@/page/index/index.jsx')),
    child:[]
  }
];
export default routeList;
