//Balanced binary search tree

class NodeTree{

    constructor(value) {

        this.value = value
        this.left = null
        this.right = null
        
    }



}

class BalancedBST {

 constructor(){
    this.root = null
 }

 sortedToBST(arr,start,end) {
        
    arr = arr.sort((a,b)=>a-b)

    let newArr = [...arr]

    if(start > end){return null}

    let mid  = Math.round((start + end) / 2);

    let node = new NodeTree(newArr[mid])

    node.left = this.sortedToBST(newArr, start, mid -1)

    node.right = this.sortedToBST(newArr, mid + 1, end)

    this.root = node
    
    return this.root

    }

    insertion(val, node = this.root){
      
      if(this.root === null){
        this.root = new NodeTree(val)
        return this.root
      }
      
      if(val < node.value){
        console.log('Going Left!')
        if(node.left === null){
          node.left = new NodeTree(val)
          
        }else{return this.insertion(val,node.left)}
        
      }
     else{
        if(node.right === null){
          node.right = new NodeTree(val)
        }else{return this.insertion(val,node.right)}
      }
    
    }
  
//end of class
  }
                
                const balancedBST = new BalancedBST()

                balancedBST.insertion(6)
                balancedBST.insertion(5)
                
                balancedBST.insertion(2)
                balancedBST.insertion(3)
                balancedBST.insertion(355)
                console.log(balancedBST.root)



  

const prettyPrint = (node, prefix = '', isLeft = true) => { //Function for pretty printing nodetree array
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.root}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

 prettyPrint(balancedBST.root)