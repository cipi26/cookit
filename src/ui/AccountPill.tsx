import { createClient } from "@/utils/supabase/server";
import Pill from "./Pill";

const AccountPill = async () => {
  const supabase = await createClient();

  // @ts-expect-error remove supabase warning about using getSession() from the console
  supabase.auth.suppressGetSessionWarning = true;

  const { data: { session } } = await supabase.auth.getSession();

  if (!session) return null;

  return (
    <Pill content={session.user.user_metadata.full_name} image={undefined} responsive={true}/>
  );
};
export default AccountPill;
