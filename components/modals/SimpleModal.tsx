import { useBodyLocked } from "@hooks/useBodyLocked"
import { AnimatePresence } from "framer-motion"
import { ReactNode, forwardRef } from "react"
import { PopupModalOverlay } from "./styles"
import { fmo, fmv } from "./variants"
import { PopupModalWrapper } from "./styles/SimpleModalStyle"
import Icon from "@/lib/icons"

type Props = {
  open: boolean
  className?: string
  children?: ReactNode
  handler?: () => void
  overlay?: boolean
}

const SimpleModal = forwardRef<HTMLDivElement, Props>(
  ({ open, children, overlay = true, handler = () => {}, className }, ref) => {
    useBodyLocked(open)

    return (
      <AnimatePresence>
        {open && (
          <>
            {overlay && (
              <PopupModalOverlay
                variants={fmo}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            )}
            <PopupModalWrapper
              className={className}
              $overlay={overlay}
              ref={ref}
              variants={fmv}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <button className="close_control" onClick={handler}>
                <Icon name="cross-icon" />
              </button>
              <div className="popup_inner">{children}</div>
            </PopupModalWrapper>
          </>
        )}
      </AnimatePresence>
    )
  }
)

SimpleModal.displayName = `ForwardedSimpleModal`

export default SimpleModal
