import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export function BlogCard({ image, title, description, link }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-36">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex h-36">
          <div className="relative w-2/5 h-full flex-shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-md"
              priority={false}
            />
          </div>

          <div className="flex-1 p-4 flex flex-col justify-center">
            <h3 className="font-semibold text-lg mb-1 line-clamp-2">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
}