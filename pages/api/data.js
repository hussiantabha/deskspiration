import { supabase } from "../../supabse-config";
export default async function handler(req, res) {
  let { data: deskinfo, error } = await supabase
    .from("desk-info-test")
    .select("*")
    .order("id", { ascending: false });

  res.status(200).json({ desk: deskinfo });
}
