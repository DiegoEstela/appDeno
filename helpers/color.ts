import { Context, helpers } from "../devDepencies.ts";
import { colors } from "../types/colors.ts";

const arr: any = [];

export const findColorAll = (ctx: Context) => {
  try {
    ctx.response.body = arr;
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { message: err.message };
  }
};

export const findColorById = (ctx: Context) => {
  try {
    const {id} = helpers.getQuery(ctx, {mergeParams: true});
    const color: colors = arr.find((color: any) => color.id === id);
    ctx.response.body = color;
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { message: err.message };
  }
};

export const createColor = async (ctx: Context) => {
    try {
      const {color} = await ctx.request.body().value
      let colorNew: colors = {
        id: (Math.random()).toString(),
        color,
       }  
        arr.push(colorNew);
        ctx.response.body = colorNew;
    } catch (err) {
      ctx.response.status = 404;
      ctx.response.body = { message: err.message };
    }
  };
