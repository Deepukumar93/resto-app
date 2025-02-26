const{usernam,password}=process.env
export const connectionStr="mongodb+srv://"+username+":<db_"+password+">@cluster0.nhj5n.mongodb.net/resto?retryWrites=true&w=majority&appName=Cluster0"