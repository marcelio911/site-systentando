// core components
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/app/ui/card"

  interface Props {
    children?: React.ReactNode;
    footer?: React.ReactNode;
    title?: string;
    description?: string;
  }

  export function CardWithForm(props: Props) {
    const { title, description, children, footer } = props;
    return (
      <Card className="w-[850px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        {footer && (
            <CardFooter>
                {footer}
            </CardFooter>
        )}
      </Card>
    )
  }