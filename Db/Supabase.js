
const supabaseUrl = 'https://vqopzyhcydyquhazyhxl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxb3B6eWhjeWR5cXVoYXp5aHhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2MjcwMDIsImV4cCI6MjA1MzIwMzAwMn0.5PYxf1TIlJQ1LQrnOwvMErBJ9nR7_7hkUzEJpkCj3ps"

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)


console.log(supabaseClient);

export default supabaseClient;