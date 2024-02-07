import supabase from "./supabase";
import { gerAuthUser } from "../util/auth";

export async function getSavings() {
  const authUser = gerAuthUser();
  let { data: savings, error } = await supabase
    .from('savings')
    .select('*')
  console.log(error);
  console.log(savings);
}


export async function getSavingsTypes() {
  let { data: savingType, error } = await supabase
    .from('savingType')
    .select('*')

  console.log(savingType);
}
