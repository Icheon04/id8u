import {cn} from "@/lib/utils";

import Skeleton from "@/components/Skeleton";

function SkeletonCard({className}: {className?: string}){
  return <Skeleton className={cn("h-[125px] w-[250px] rounded-xl", className)} />;
}

function SkeletonCards(){
  return (
    <>
      <SkeletonCard className="w-full"/>
      <SkeletonCard className="w-full"/>
      <SkeletonCard className="w-full"/>
    </>
  );
}

export default SkeletonCards;