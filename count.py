import tensorflow as tf
import sys
import os

# GPU를 사용하도록 tensorflow에 대한 제한을 구성
config = tf.ConfigProto()
config.gpu_options.per_process_gpu_memory_fraction = 0.9
tf.keras.backend.set_session(tf.Session(config=config));

# change this as you see fit
file_path = sys.argv[1]

#이미지 불러오기
file_list = os.listdir(file_path)

# empty code
image_list = []
count_score = []
for i in file_list:
    
    image_path = file_path + i

    # Read in the image_data
    image_data = tf.gfile.FastGFile(image_path, 'rb').read()
    image_list.append(i)
    # Loads label file, strips off carriage return
    label_lines = [line.rstrip() for line
    in tf.gfile.GFile("retrained_labels_count.txt")]

    # Unpersists graph from file
    with tf.gfile.FastGFile("retrained_graph_count.pb", 'rb') as f:
        graph_def = tf.GraphDef()
        graph_def.ParseFromString(f.read())
        _ = tf.import_graph_def(graph_def, name='')

    tensor_name_list = [tensor.name for tensor in tf.get_default_graph().as_graph_def().node]
    for tensor_name in tensor_name_list:
        print(tensor_name, '\n')

    with tf.Session() as sess:
        # Feed the image_data as input to the graph and get first prediction
        softmax_tensor = sess.graph.get_tensor_by_name('final_result:0')
        predictions = sess.run(softmax_tensor, \
        {'DecodeJpeg/contents:0': image_data})
        # Sort to show labels of first prediction in order of confidence
        top_k = predictions[0].argsort()[-len(predictions[0]):][::-1]
        for node_id in top_k:
            human_string = label_lines[node_id]
            score = predictions[0][node_id]
            count_score.append((human_string, score))

for i in range(len(file_list)):
    print('---',image_list[i],'---',end='\n')
    print('---EXPECTED QUANTITY---',end='\n')
    for j in range(6):
        print('%s (EXPECTED QUANTITY = %.5f)' % (count_score[i*6+j][0], count_score[i*6+j][1]), end='\n')
