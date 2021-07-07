import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import MyText from "./MyText";

export default function Pagination({ perPage, totalCars, paginate, show, currentPage}){
    const pageNumbers = [];
    let visibleNumbers = [];
    const [neighbours] = useState(3);

    for(let i = 1; i <=Math.ceil(totalCars/perPage); i++){
        pageNumbers.push(i);
    }

    const isActive = (number) => {
        if(number===currentPage){
            return styles.paginationNumberActive;
        }
        return styles.paginationNumber;
    }

    const forwardJump = () => {
        visibleNumbers.push(pageNumbers[pageNumbers.length-1]-(pageNumbers[pageNumbers.length-1]-visibleNumbers[neighbours+1])/2|0);
    };
    const backwardJump = () => {
        visibleNumbers.push((pageNumbers[currentPage-(neighbours/2|0)]-pageNumbers[0])/2|0);
    };

    const defineVisibleNumbers = () => {
        if(pageNumbers.length>neighbours+4) {
            visibleNumbers.push(pageNumbers[0]);
            if (currentPage < neighbours + 2) {
                for (let i = 1; i <= neighbours + 1; i++) {
                    visibleNumbers.push(pageNumbers[i])
                }

                forwardJump();

            } else if (currentPage > pageNumbers.length - (neighbours + 1)) {
                backwardJump();
                for (let i = pageNumbers.length - (neighbours + 1); i <= pageNumbers.length - (neighbours - 1); i++) {
                    visibleNumbers.push(pageNumbers[i])
                }
            } else {
                backwardJump();
                let neighboursHalf = neighbours / 2 | 0
                for (let i = currentPage - neighboursHalf - 1; i < currentPage + neighboursHalf; i++) {
                    visibleNumbers.push(pageNumbers[i]);
                    //console.log(currentPage - (neighbours / 2 | 0));
                }
                forwardJump();
            }
            visibleNumbers.push(pageNumbers[pageNumbers.length - 1]);
        }else{
            visibleNumbers=pageNumbers;
        }
    }

    defineVisibleNumbers();

    if(show) {
        return (
            <View>
                <View style={styles.pagination}>
                    <TouchableOpacity style={styles.paginationNumber} onPress={()=>paginate(currentPage-1)}>
                        <Text style={styles.paginateArrow}>{"<"}</Text>
                    </TouchableOpacity>
                    {visibleNumbers.map(number => (
                        <TouchableOpacity style={isActive(number)} onPress={() => paginate(number)} key={number}>
                            <MyText>{number}</MyText>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.paginationNumber} onPress={()=>paginate(currentPage+1)}>
                        <Text style={styles.paginateArrow}>{">"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }



    return<View/>
}

const styles = StyleSheet.create({
    pagination: {
        flex: 1,
        flexDirection: "row",
        marginTop:5,
        marginBottom:15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    paginateArrow: {
      color:'#2d86e7',
    },
    paginationNumber: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffffff",
        width: 30,
        height: 30,
        borderRadius:15,
        margin:3,
    },
    paginationNumberActive: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#9a9aa1",
        width: 30,
        height: 30,
        borderRadius:15,
        margin:3,
    }
});
