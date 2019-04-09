from kubernetes import client, config, watch

# Configs can be set in Configuration class directly or using helper utility
config.load_kube_config()

# from kubernetes import client, config, watch

# # Configs can be set in Configuration class directly or using helper utility
# config.load_kube_config()

# v1 = client.CoreV1Api()
# count = 10
# w = watch.Watch()
# for event in w.stream(v1.list_namespace, _request_timeout=60):
#     print("Event: %s %s" % (event['type'], event['object'].metadata.name))
#     count -= 1
#     if not count:
#         w.stop()

# print("Ended.")


v1 = client.CoreV1Api()
print("Listing pods with their IPs:")
ret = v1.list_pod_for_all_namespaces(watch=False)
for i in ret.items:
    print("%s\t%s\t%s" %
            (i.status.pod_ip, i.metadata.namespace, i.metadata.name))

api_instance = client.CoreV1Api()
for line in api_instance.read_namespaced_pod_log(name='api-deploy-canary-7f5499c5c-gwv7s', namespace='default',container='spring-boot-app-api', follow=False, _preload_content=False).stream():
    print(line)
for line in api_instance.read_namespaced_pod_log(name='flux-5799548675-k6k7h', namespace='flux', follow=True, _preload_content=False).stream():
    print(line)