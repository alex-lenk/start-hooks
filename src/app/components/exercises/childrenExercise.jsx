import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentList>
                <Component/>
                <Component/>
                <Component/>
            </ComponentList>
        </CollapseWrapper>
    );
};

const ComponentList = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);
    return React.Children.map(arrayOfChildren, (child) => {
        const config = {
            ...child.props,
            num: +child.key.replace(".", "") + 1
        };
        return React.cloneElement(child, config);
    });
};

const Component = ({ num }) => {
    return <div>{num} Компонент списка</div>;
};

Component.propTypes = {
    num: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChildrenExercise;
