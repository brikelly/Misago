import classnames from "classnames"
import React from "react"

interface IModalAlertProps {
  appearance?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
  className?: string
  children: React.ReactNode
}

const ModalAlert: React.FC<IModalAlertProps> = ({
  appearance = "danger",
  children,
  className,
}) => (
  <div
    className={classnames(
      "modal-alert",
      `modal-alert-${appearance}`,
      className
    )}
  >
    <div
      className={classnames(
        "alert",
        "alert-responsive",
        `alert-${appearance}`,
        className
      )}
      role="alert"
    >
      {children}
    </div>
  </div>
)

export default ModalAlert
