import {
    AnimationPlaybackControls,
    AnimationScope,
    DOMKeyframesDefinition,
    AnimationOptions as DynamicAnimationOptions,
    ElementOrSelector,
    getValueTransition,
    NativeAnimation,
    resolveElements,
} from "motion-dom"
import { invariant, secondsToMilliseconds } from "motion-utils"

export function animateElements(
    elementOrSelector: ElementOrSelector,
    keyframes: DOMKeyframesDefinition,
    options?: DynamicAnimationOptions,
    scope?: AnimationScope
) {
    const elements = resolveElements(elementOrSelector, scope) as Array<
        HTMLElement | SVGElement
    >
    const numElements = elements.length

    invariant(Boolean(numElements), "No valid element provided.")

    const animations: AnimationPlaybackControls[] = []

    for (let i = 0; i < numElements; i++) {
        const element = elements[i]
        const elementTransition = { ...options }

        /**
         * Resolve stagger function if provided.
         */
        if (typeof elementTransition.delay === "function") {
            elementTransition.delay = elementTransition.delay(i, numElements)
        }

        for (const valueName in keyframes) {
            const valueKeyframes =
                keyframes[valueName as keyof typeof keyframes]!
            const valueOptions = {
                ...getValueTransition(elementTransition as any, valueName),
            }

            valueOptions.duration &&= secondsToMilliseconds(
                valueOptions.duration
            )

            valueOptions.delay &&= secondsToMilliseconds(valueOptions.delay)

            animations.push(
                new NativeAnimation({
                    element,
                    name: valueName,
                    keyframes: valueKeyframes,
                    transition: valueOptions,
                    allowFlatten:
                        !elementTransition.type && !elementTransition.ease,
                })
            )
        }
    }

    return animations
}
