interface Group {
    id: number;
    name: string;
    members: number;
    online: number;
    image: string;
    isOnline: boolean;
  }
  
  const groups: Group[] = [
    {
      id: 1,
      name: "Cuisine",
      members: 55,
      online: 22,
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      isOnline: true
    },
    {
      id: 2,
      name: "Art",
      members: 132,
      online: 4,
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
      isOnline: true
    },
    {
      id: 3,
      name: "Gaming",
      members: 207,
      online: 0,
      image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      isOnline: false
    },
    {
      id: 4,
      name: "Cinema",
      members: 105,
      online: 12,
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80",
      isOnline: true
    },
    {
      id: 5,
      name: "Song",
      members: 67,
      online: 3,
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      isOnline: true
    },
    {
      id: 6,
      name: "Code",
      members: 83,
      online: 43,
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      isOnline: true
    },
    {
      id: 7,
      name: "Dancing",
      members: 108,
      online: 86,
      image: "https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      isOnline: true
    }
  ];
  
  export default function DashboardTasks() {
    return (
      <>
        <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
            <a className="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </a>
            <a className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center" href="#">Create group</a>
          </div>
          {groups.map((group) => (
            <div key={group.id} className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
              <img className="w-20 h-20 object-cover object-center rounded-full" src={group.image} alt={group.name.toLowerCase()} />
              <h4 className="text-white text-2xl font-bold capitalize text-center">{group.name}</h4>
              <p className="text-white/50">{group.members} members</p>
              <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                {group.online} Online 
                <span className={`ml-2 w-2 h-2 block rounded-full group-hover:animate-pulse ${group.isOnline ? 'bg-green-500' : 'bg-red-400'}`}></span>
              </p>
            </div>
          ))}
        </div>
      </>
    );
  } 