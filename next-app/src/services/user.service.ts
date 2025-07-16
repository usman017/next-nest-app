import http from "@/helpers/api.helper";
import {
  getApisUrl,
} from "@/helpers/common.helper";

export const fetchAllUsers = async () => {
  return await http.get(getApisUrl('/user'));
}