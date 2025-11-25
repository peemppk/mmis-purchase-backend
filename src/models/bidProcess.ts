import Knex = require('knex');
import * as moment from 'moment';

export class BidProcessModel {

  public tableName = 'l_bid_process';
  public primaryKey = 'id';

  list(knex: Knex, limit: number = 100, offset: number = 0) {
    return knex('l_bid_process as lbp')
      .select('lbp.*', 'bbm.buy_method_name')
      .leftJoin('bi_buy_method as bbm', 'lbp.buy_method_id', 'bbm.buy_method_id')
      .limit(limit)
      .offset(offset);
  }
  bidAmount(knex: Knex, id: any) {
    return knex(this.tableName)
      .where('id', id);
  }

  save(knex: Knex, datas: any) {
    return knex(this.tableName)
      .insert(datas);
  }

  update(knex: Knex, id: string, datas: any) {
    return knex(this.tableName)
      .where(this.primaryKey, id)
      .update(datas);
  }

  isActive(knex: Knex, id: string) {
    return knex(this.tableName)
      .where(this.primaryKey, id)
      .update('is_active', 0);
  }

  detail(knex: Knex, id: string) {
    return knex(this.tableName)
      .where(this.primaryKey, id);
  }

  remove(knex: Knex, id: string) {
    return knex(this.tableName)
      .where(this.primaryKey, id)
      .del();
  }

  getBuyMethods(knex: Knex) {
    return knex('bi_buy_method')
  }

}