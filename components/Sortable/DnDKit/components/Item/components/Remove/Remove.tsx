import React from "react";

import { Action, ActionProps } from "../Action";

export function Remove(props: ActionProps) {
  return (
    <Action
      {...props}
      active={{
        fill: "rgba(255, 70, 70, 0.95)",
        background: "rgba(255, 70, 70, 0.1)",
      }}
    >
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.82715 19.6631C4.19434 19.6631 3.68164 19.4756 3.28906 19.1006C2.90234 18.7314 2.69434 18.2305 2.66504 17.5977L2.05859 4.80957H1.00391C0.828125 4.80957 0.672852 4.74512 0.538086 4.61621C0.40918 4.48145 0.344727 4.32324 0.344727 4.1416C0.344727 3.96582 0.40918 3.81348 0.538086 3.68457C0.672852 3.5498 0.828125 3.48242 1.00391 3.48242H16.71C16.8857 3.48242 17.0381 3.54687 17.167 3.67578C17.2959 3.80469 17.3604 3.95996 17.3604 4.1416C17.3604 4.32324 17.2959 4.48145 17.167 4.61621C17.0439 4.74512 16.8916 4.80957 16.71 4.80957H15.6553L15.0488 17.5889C15.0195 18.2217 14.8086 18.7256 14.416 19.1006C14.0234 19.4756 13.5137 19.6631 12.8867 19.6631H4.82715ZM4.9502 18.3359H12.7461C13.0039 18.3359 13.2178 18.251 13.3877 18.0811C13.5576 17.917 13.6484 17.7031 13.6602 17.4395L14.2402 4.80957H3.42969L4.04492 17.4395C4.05664 17.6973 4.14746 17.9111 4.31738 18.0811C4.4873 18.251 4.69824 18.3359 4.9502 18.3359ZM6.25098 16.833C6.08691 16.833 5.95508 16.7861 5.85547 16.6924C5.75586 16.5986 5.70312 16.4727 5.69727 16.3145L5.43359 6.91895C5.42773 6.7666 5.47461 6.64355 5.57422 6.5498C5.67969 6.4502 5.81445 6.40039 5.97852 6.40039C6.13672 6.40039 6.26562 6.44727 6.36523 6.54102C6.4707 6.63477 6.52344 6.75781 6.52344 6.91016L6.7959 16.3145C6.7959 16.4668 6.74609 16.5928 6.64648 16.6924C6.54688 16.7861 6.41504 16.833 6.25098 16.833ZM8.85254 16.833C8.68848 16.833 8.55371 16.7861 8.44824 16.6924C8.34277 16.5928 8.29004 16.4668 8.29004 16.3145V6.91895C8.29004 6.7666 8.34277 6.64355 8.44824 6.5498C8.55371 6.4502 8.68848 6.40039 8.85254 6.40039C9.02246 6.40039 9.16016 6.4502 9.26562 6.5498C9.37109 6.64355 9.42383 6.7666 9.42383 6.91895V16.3145C9.42383 16.4668 9.37109 16.5928 9.26562 16.6924C9.16016 16.7861 9.02246 16.833 8.85254 16.833ZM11.4629 16.833C11.293 16.833 11.1582 16.7861 11.0586 16.6924C10.959 16.5928 10.9121 16.4668 10.918 16.3145L11.1816 6.91895C11.1875 6.76074 11.2402 6.63477 11.3398 6.54102C11.4395 6.44727 11.5684 6.40039 11.7266 6.40039C11.8965 6.40039 12.0312 6.4502 12.1309 6.5498C12.2305 6.64355 12.2773 6.7666 12.2715 6.91895L12.0078 16.3145C12.002 16.4727 11.9492 16.5986 11.8496 16.6924C11.75 16.7861 11.6211 16.833 11.4629 16.833ZM4.99414 4.10645V2.1377C4.99414 1.50488 5.1875 1.00684 5.57422 0.643555C5.9668 0.274414 6.5 0.0898438 7.17383 0.0898438H10.5137C11.1875 0.0898438 11.7178 0.274414 12.1045 0.643555C12.4971 1.00684 12.6934 1.50488 12.6934 2.1377V4.10645H11.2959V2.22559C11.2959 1.97949 11.2139 1.78027 11.0498 1.62793C10.8916 1.47559 10.6807 1.39941 10.417 1.39941H7.27051C7.00684 1.39941 6.79297 1.47559 6.62891 1.62793C6.4707 1.78027 6.3916 1.97949 6.3916 2.22559V4.10645H4.99414Z"
          fill="#9B9B9B"
        />
      </svg>
    </Action>
  );
}
