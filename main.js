import { getPresalesApproved, getPresalesNotApproved } from './multicall.js';

const init = async () => {
  const presalesApproved = await getPresalesApproved();
  console.log('presalesApproved: ', presalesApproved);

  const presalesNotApproved = await getPresalesNotApproved();
  console.log('presalesNotApproved: ', presalesNotApproved);
};

init();
