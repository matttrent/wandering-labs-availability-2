import { config } from './shared/utils/config'; //eslint-disable-line
import { AvailabilityRequestAll } from './endpoints/availability-requests/all';
import { AvailabilityRequestCancel } from './endpoints/availability-requests/cancel';
import { AvailabilityRequestCreate } from './endpoints/availability-requests/create';
import { AvailabilityRequestFind } from './endpoints/availability-requests/find';
import { AvailabilityRequestStats } from './endpoints/availability-requests/stats';
import { AvailabilityRequestUnpause } from './endpoints/availability-requests/unpause';

exports.availabilityRequestAll = (event, context) => {
  return new AvailabilityRequestAll(event.id).all().then((objs) => {
    context.succeed(objs);
  });
};

exports.availabilityRequestCancel = (event, context) => {
  return new AvailabilityRequestCancel(event.id).cancel().then(() => {
    context.succeed({});
  });
};

exports.availabilityRequestCreate = (event, context) => {
  return new AvailabilityRequestCreate(event).create().then((obj) => {
    context.succeed(obj);
  });
};

exports.availabilityRequestFind = (event, context) => {
  return new AvailabilityRequestFind(event.id).find().then((obj) => {
    context.succeed(obj);
  });
};

exports.availabilityRequestStats = (event, context) => {
  return new AvailabilityRequestStats().stats().then((obj) => {
    context.succeed(obj);
  });
};

exports.availabilityRequestUnpause = (event, context) => {
  return new AvailabilityRequestUnpause(event.id).update().then(() => {
    context.succeed({});
  });
};
