-- Add RLS policies for the user table that was missing policies
CREATE POLICY "Allow authenticated users to view user table" 
ON public.user 
FOR SELECT 
TO authenticated 
USING (true);

-- Remove the existing user table since we have the profiles table now
DROP TABLE public.user;