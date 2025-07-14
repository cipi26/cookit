import { createClient } from "@/utils/supabase/server";
import Pill from "./Pill";

const AccountPill = async () => {
  const supabase = await createClient();

  const { data: { session } } = await supabase.auth.getSession();

  if (!session) return null;

  return (
    <Pill content={session.user.user_metadata.full_name} image={undefined} responsive={true}/>
  );
};
export default AccountPill;
